import {API, graphqlOperation, Storage} from "aws-amplify";
import React from 'react';
import { useHistory } from "react-router";
import { createJPFood } from "../graphql/mutations";
import { listJPFoods, listOrders } from "../graphql/queries";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const [foods, setFoods] = React.useState([])
    const getfoods = async () => {
        const data = await API.graphql({
          query: listJPFoods,
          authMode: 'AWS_IAM'
        }) 
        console.log("success: ", data)
        setFoods(data.data.listJPFoods.items)
    }

    const getorders = async () => {
        const data = await API.graphql(graphqlOperation(listOrders))
        console.log("success: ", data)
    }

    const history = useHistory()
    const handlegotologin = () => history.push('/login')

    const bucket = "jpnst4d38dc0062eb4c7b886149e388b15749215416-dev"
    const region = "ca-central-1"
    const [image, setImage] = React.useState(null);
    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        console.log(url)
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setInput({ ...input, image: url });

        } catch (err) {
            console.log(err);
        }
    }

    const [input, setInput] = React.useState({ title: "", description: "", image: "", author: "", price: "" });
    const createFood = async () => {
        const data = await API.graphql(graphqlOperation(createJPFood, {input: input}))
        console.log("success: ", data)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        createFood()
    }

    return (
        <div>
            home
            <button onClick={getfoods}>get food</button>
            <button onClick={getorders}>get orders</button>
            <button onClick={handlegotologin}>go to login</button>

            <div>
                foods
                {foods.map(({ image: image, id, title })=>
                    <div key={id}>
                        <article key={id} className="book">
                            <div className="book-image">
                                <img src={image} alt={title} width={200} />
                            </div>
                        </article>
                    </div>
                )}
            </div>

            <br /><br /><br /><br /><br /><br />
            <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-fields">
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" width={300} /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                            <div className="title-form">
                                <p><label htmlFor="title">Title</label></p>
                                <p><input
                                    name="email"
                                    type="title"
                                    placeholder="Type the title"
                                    onChange={(e) => setInput({ ...input, title: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="description-form">
                                <p><label htmlFor="description">Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="8"
                                    placeholder="Type the description of the book"
                                    onChange={(e) => setInput({ ...input, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="author-form">
                                <p><label htmlFor="author">Author</label></p>
                                <p><input
                                    name="author"
                                    type="text"
                                    placeholder="Type the author's name"
                                    onChange={(e) => setInput({ ...input, author: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of the book (USD)"
                                        onChange={(e) => setInput({ ...input, price: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
        </div>
    )
}
