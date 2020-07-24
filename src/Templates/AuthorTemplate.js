export const AUTHOR_TEMPLATE = {
    
        className = "author_form",
        onSubmit = handleSubmit,
        h2 = "Добавить Автора",
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
            name : "info", 
            caption: "Информация",
            inputType: "text",
            placeholder: "onegin@mail.ru", 
            required : false,        
            onchange: handleChange,
            textArea: true
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