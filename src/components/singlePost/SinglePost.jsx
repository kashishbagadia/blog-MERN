import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1624689146002-0a5d2dcbf2fe?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Kashish</b></span>
                    <span className="singlePostAuthor">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia repudiandae velit earum unde fuga saepe officia deserunt placeat corrupti qui, nobis accusantium hic culpa error aut quibusdam odio rem doloremque fugit similique ullam eligendi quaerat dolorum? Iure earum quos, labore eaque culpa repellat id, optio, beatae laudantium quo laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quo autem molestias distinctio beatae architecto delectus, ipsum corporis, minus sint eos tempora numquam error reiciendis blanditiis similique enim quam? Dolorum, autem sint magnam nobis odit dicta facilis nam fuga eius sed necessitatibus veritatis cumque architecto expedita porro, a, excepturi natus eum perferendis molestias doloribus quasi blanditiis consectetur quaerat. Nisi, dolor?

                </p>
            </div>
        </div>
    )
}
