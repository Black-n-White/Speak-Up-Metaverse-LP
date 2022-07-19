const languagePacks = {
    'en': {
        'heading': 'Get to know more about the Speak Up Metaverse, register for a free trial lesson!',
        'input1': 'Your name and surname (Required)',
        'input2': 'Your phone number (Required)',
        'input3': 'Your email address (Optional)',
        'submitBtn': 'Register',
    },
    'ru': {
        'heading': 'Узнай больше про Speak Up Metaverse, закажи бесплатный пробный урок!',
        'input1': 'Ваше имя и фамилия (Обязательно)',
        'input2': 'Ваш номер телефона (Обязательно)',
        'input3': 'Ваша електронная почта (По желанию)',
        'submitBtn': 'Заказать',
    },
    'ua': {
        'heading': 'Дізнайся більше про Speak Up Metaverse, замов безкоштовний пробний урок!',
        'input1': "Ваше ім'я та прізвище (Обов'язково)",
        'input2': "Ваш номер телефону (Обов'язково)",
        'input3': "Ваша електронна пошта (За бажанням)",
        'submitBtn': 'Замовити',
    },
};

langSelects = document.querySelectorAll( '.lang' );
heading = document.getElementById( 'heading' );
input1 = document.getElementById( 'input1' );
input2 = document.getElementById( 'input2' );
input3 = document.getElementById( 'input3' );
submitBtn = document.getElementById( 'submit-btn' );

langSelects.forEach( langSelect =>
{
    langSelect.addEventListener( 'click', () =>
    {
        langSelects.forEach( langSelect =>
        {
            langSelect.classList.remove( 'lang-active' );
        } );
        langSelect.classList.add( 'lang-active' );
        langPack = languagePacks[ langSelect.id ];
        heading.innerText = langPack[ 'heading' ];
        input1.placeholder = langPack[ 'input1' ];
        input2.placeholder = langPack[ 'input2' ];
        input3.placeholder = langPack[ 'input3' ];
        submitBtn.innerText = langPack[ 'submitBtn' ];
    } )
} );