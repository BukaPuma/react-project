export const BOOK_TEMPLATE = {
        className = "contact_form",
        onSubmit = handleSubmit,
        h2 = "Добавить Читателя",
        fields = [
            {        
            name : "lastName", 
            caption: "Фамилия",
            inputType: "text",
            placeholder: "Пушкин", 
            required : true,        
            onchange: handleChange
        },
    
        {        
            name : "firstName", 
            caption: "Имя",
            inputType: "text",
            placeholder: "Александр", 
            required : true,        
            onchange: handleChange
        },
        {        
            name : "email", 
            caption: "email",
            inputType: "email",
            placeholder: "onegin@mail.ru", 
            required : false,        
            onchange: handleChange
        },
        {        
            name : "phone", 
            caption: "Телефон",
            inputType: "tel",
            placeholder: "81234567890", 
            required : true,        
            onchange: handleChange
        }
        ]
    }





