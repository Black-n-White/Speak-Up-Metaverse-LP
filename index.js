const languagePacks = {
    'en': {
        'heading': 'Get to know more about the Speak Up Metaverse, register for a free trial lesson!',
        'input1': 'Your name and surname (Required)',
        'input2': 'Your phone number (Required)',
        'input3': 'Your email address (Optional)',
        'submitBtn': 'Register',
        'dialogueSuccessText': 'Thank you for registering, a consultant will contact you soon.',
        'dialogueFailText': 'Please fill out all the required fields (Name and Phone number).',
        'dialogueTimeText': 'Oops, something went wrong. Please submit the form again in 1 minute.',
    },
    'ru': {
        'heading': 'Узнай больше про Speak Up Metaverse, зарегистрируйся на бесплатный пробный урок!',
        'input1': 'Ваше имя и фамилия (Обязательно)',
        'input2': 'Ваш номер телефона (Обязательно)',
        'input3': 'Ваша електронная почта (По желанию)',
        'submitBtn': 'Зарегистрироваться',
        'dialogueSuccessText': 'Благодарим за регистрацию на пробный урок, с вами скоро свяжется консультант.',
        'dialogueFailText': 'Пожалуйста, заполните все необходимые поля для регистрации (Имя и номер телефона).',
        'dialogueTimeText': 'Упс, что-то пошло не так. Пожалуйста, отправьте форму еще раз через 1 минуту',
    },
    'ua': {
        'heading': 'Дізнайся більше про Speak Up Metaverse, зареєструйся на безкоштовний пробний урок!',
        'input1': "Ваше ім'я та прізвище (Обов'язково)",
        'input2': "Ваш номер телефону (Обов'язково)",
        'input3': "Ваша електронна пошта (За бажанням)",
        'submitBtn': 'Зареєструватися',
        'dialogueSuccessText': "Дякуємо за реестрацію на пробний урок, з вами скоро зв'яжеться консультант.",
        'dialogueFailText': "Будь ласка, заповніть всі поля, необхідні для реєстрації (Ім'я та номер телефону).",
        'dialogueTimeText': "Упс, щось пішло не так. Будь ласка, заповніть форму знову через 1 хвилину.",
    },
};

langSelects = document.querySelectorAll( '.lang' );
heading = document.getElementById( 'heading' );
input1 = document.getElementById( 'input1' );
input2 = document.getElementById( 'input2' );
input3 = document.getElementById( 'input3' );
submitBtn = document.getElementById( 'submit-btn' );
dialogueSuccess = document.getElementById( "dialogue-success" );
dialogueFail = document.getElementById( "dialogue-fail" );
dialogueTime = document.getElementById( "dialogue-time" );
dialogueSuccessText = document.getElementById( "dialogue-success-text" );
dialogueFailText = document.getElementById( "dialogue-fail-text" );
dialogueTimeText = document.getElementById( "dialogue-time-text" );

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
        dialogueSuccessText.innerText = langPack[ 'dialogueSuccessText' ];
        dialogueFailText.innerText = langPack[ 'dialogueFailText' ];
        dialogueTimeText.innerText = langPack[ 'dialogueTimeText' ];
    } )
} );
