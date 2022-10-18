var faker = require('faker');
faker.locale = "pt_BR";

var cpf = require('gerador-validador-cpf');

export default function () {
    var fristName = faker.name.firstName();
    var lastName = faker.name.lastName();
    return {
        name: `${fristName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(fristName),
        whatsapp: faker.phone.phoneNumber(),
        address: {
            postalcode: '68742000',
            street: 'Avenida Barão do Rio Branco',
            number: '123',
            details: 'Casa amarela',
            city_state: 'Castanhal/PA'
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
    }
}