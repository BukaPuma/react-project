import React from 'react'
import {Link} from 'react-router-dom'


const Home = (props) => {

    return ( 
        <>
            <div className="main-list">
            <h1> Рабочее место библиотекаря </h1>
            <Link className="green-button main-list__button" to="/authorlist">Список авторов</Link>
            <Link className="green-button main-list__button" to="/userlist">Список читателей</Link>
            <Link className="green-button main-list__button" to="/booklist">Список книг</Link>
            </div>
        </>
    )
}

export default Home


// const hocUser = (override) => (MainComponent) => (props) => {
    
//     return (
//         <>
//             {override.email}
//             <MainComponent {...props} { ...override} />
//         </>
//         )
// }

// const User = ({ name }) => {
//     // console.log('user', props)
//     return (
//         <div>
//             {name}
//         </div>
//     )
// }

// const NewProfile = hocUser({ email: 'asd.mail.ru' })(User)

// const NewUser = hocUser({ name: 'Oliver' })(User)

// const Home = (props) => {

//     return (
//         <>
//             <h2>Home</h2>
//             {/* <User name='Jack' /> */}
//             {/* <NewUser /> */}
//             <NewProfile name={'Name'} /> 
//             <Link to="/userchange">userchange</Link>
//         </>
//     )
// }

// export default Home


// class CommentList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//           // "DataSource" -- произвольный глобальный источник данных
//           comments: DataSource.getComments()
//         };
//       }

//       componentDidMount() {
//         DataSource.addChangeListener(this.handleChange)
//       }

//       componentWillUnmount() {
//         // Отписаться от оповещений
//         DataSource.removeChangeListener(this.handleChange);
//       }

//       handleChange() {
//           this.setState({comments: DataSource.getComments()
//         })
//       }
//       render() {
//           return (
//               <div>
//                   {this.state.comments.map((comment) => (
//                       <Comment comment={comment} key={comment.id} />
//                   ))}
//               </div>
//           )
//       }
// }


// class BlogPost extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleChange = this.handleChange.bind(this)
//         this.state = {
//             blogPost: DataSource.getBlogPost(props.id)
//         }
//     }

//     componentDidMount() {
//         DataSource.addChangeListener(this.handleChange);
//       }
      
//       componentWillUnmount() {
//         DataSource.removeChangeListener(this.handleChange);
//       }
    
//       handleChange() {
//         this.setState({
//           blogPost: DataSource.getBlogPost(this.props.id)
//         });
//       }

//       render() {
//         return <TextBlock text={this.state.blogPost} />;
//       }

// }


// const CommentWithSubscription = withSubscription(
//     CommentList,
//     (DataSource) => DataSource.getComments()
// )

// const BlogPostWithSubscription = withSubscription(
//     Blogpost, 
//     (DataSource, props) => DataSource.getComments(props.id)
//     )


//     function withSubscription (WrappedComponent, selectData) {
//         return class extends React.Component {
//             constructor 
//         }
//     }