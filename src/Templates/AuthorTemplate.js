export const  AUTHOR_TEMPLATE = {
    className : "contact_form",
    onSubmit : 'handleSubmit',       
    h2: "Редактировать автора",
    fields : [
        {        
            name : "lastName", 
            caption: "Фамилия",
            inputType: "text",
            placeholder: "Пушкин", 
            required : true       

        },
     
        {        
            name : "firstName", 
            caption: "Имя",
            inputType: "text",
            placeholder: "Александр", 
            required : true       

        },
        {        
            name : "info", 
            caption: "Информация",
            inputType: "text",
            placeholder: "onegin@mail.ru", 
            required : false,        
            textArea: true
        },
    {        
        name : "birthday", 
        caption: "Дата рождения",
        inputType: "date",
        placeholder: "", 
        required : true,        
        onchange: 'handleChange',
        select: true
            }
    ]
}

// export const AUTHOR_TEMPLATE = {    
//         className = "author_form",
//         onSubmit = handleSubmit,
//         h2 = "Добавить Автора",
//         fields = [
//             {        
//             name : "lastName", 
//             caption: "Фамилия",
//             inputType: "text",
//             placeholder: "Пушкин", 
//             required : true       

//         },
    
//         {        
//             name : "firstName", 
//             caption: "Имя",
//             inputType: "text",
//             placeholder: "Александр", 
//             required : true       

//         },
//         {        
//             name : "info", 
//             caption: "Информация",
//             inputType: "text",
//             placeholder: "onegin@mail.ru", 
//             required : false,        
//             textArea: true
//         },
//         {        
//             name : "phone", 
//             caption: "Телефон",
//             inputType: "tel",
//             placeholder: "81234567890", 
//             required : true      

//         }
//         ]
// }