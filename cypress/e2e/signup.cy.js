import signupPage from '../pages/signupPage'
import signupFactory from '../factories/signupFactory'

describe('Cadastro', function () {
    var deliver
    beforeEach(function () {
        deliver = signupFactory()
    })

    it('User Should be deliver', function () {
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.modalContentShouldBe(expectedMessage)
    })


    it('Invalid CPF', function () {
        deliver.cpf = '1234'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Invalid Email', function () {
        deliver.email = 'emailinvalido'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required Fields', function () {

        const messages = [
            { field: 'fullName', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        beforeEach(function () {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function (message) {
            it(`${message.field} is required`, function () {
                signupPage.alertMessageShouldBe(message.output)
            })

        })
    })
})
