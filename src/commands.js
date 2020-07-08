const commands = [
    {
        action: '!comandos',
        message: '!github !twitter !donate !postura !agua !macho !site'
    },
    {
        action: '!agua',
        count: 0,
        message: '@Laudeee BEBE AGUA ARROMBADO JA PEDIRAM <X> VEZES SÓ HOJE',
        oldMessage: '@Laudeee BEBE AGUA ARROMBADO JA PEDIRAM <X> VEZES SÓ HOJE',
    },
    {
        action: '!postura',
        count: 0,
        message: '@Laudeee ARRUMA A POSTURA ARROMBADO JA PEDIRAM <X> VEZES SÓ HOJE',
        oldMessage: '@Laudeee ARRUMA A POSTURA ARROMBADO JA PEDIRAM <X> VEZES SÓ HOJE'
    },
    {
        action: '!macho',
        count: 0,
        message: `Saulo já falou "macho" <X> vezes só nessa live.`,
        oldMessage: 'Saulo já falou "macho" <X> vezes só nessa live.'
    },
    {
        action: '!github',
        message: 'Dá uma olhada nos meus códigos e me segue lá: https://github.com/saulojoab <3'
    },
    {
        action: '!twitter',
        message: 'Me segue lá: https://twitter.com/laudtriste <3'
    },
    {
        action: '!site',
        message: 'Da uma olhada no meu portfolio e projetos: http://saulojoab.com <3'
    },
    {
        action: '!donate',
        includeNames: true,
        message: `você pode me dar um help com qualquer valor financeiro e mandar uma mensagem na live.
        \nSó mandar por aqui: https://www.streamlabs.com/Laudeee`
    },
    {
        action: 'boa noite',
        includeNames: true,
        message: 'boa noite! <3'
    },
    {
        action: 'salve',
        includeNames: true,
        message: 'SALVE SER HUMANO LINDO CHEROSO! <3'
    },
    {
        action: 'qual teu github',
        includeNames: true,
        message: 'aqui ó: https://github.com/saulojoab. Dá uma olhada e me segue lá <3'
    },
    {
        action: 'qual teu github?',
        includeNames: true,
        message: 'aqui ó: https://github.com/saulojoab. Dá uma olhada e me segue lá <3'
    },
]

module.exports = commands;