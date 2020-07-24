export const  BOOK_TEMPLATE = {
    className : "contact_form",
    onSubmit : 'handleSubmit',       
    h2: "Редактировать книгу",
    fields : [
        {        
        name : "title", 
        caption: "Название",
        inputType: "text",
        placeholder: "Сказка о Царе Салтане", 
        required : true,        
        onchange: 'handleChange'
        
    },    
    {        
        name : "info", 
        caption: "Информация",
        inputType: "text",
        placeholder: "Пример информации", 
        required : true,        
        onchange: 'handleChange'
    },
    {        
        name : "author", 
        caption: "Автор",
        inputType: "text",
        required : false,        
        onchange: 'handleChange',
        select: true
    },
    {        
        name : "user", 
        caption: "Читает",
        inputType: "text",
        placeholder: "81234567890",        
        onchange: 'handleChange',
        select: true
            }
    ]
}