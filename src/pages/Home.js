import {API, graphqlOperation} from "aws-amplify";
import React from 'react';
import { useHistory } from "react-router";
import { createJPFood } from "../graphql/mutations";
import { listJPFoods, listOrders } from "../graphql/queries";

export default function Home() {
    const getfoods = async () => {
        const data = await API.graphql({
          query: listJPFoods,
          authMode: 'AWS_IAM'
        }) 
        console.log("success: ", data)
    }

    const getorders = async () => {
        const data = await API.graphql(graphqlOperation(listOrders))
        console.log("success: ", data)
    }

    const history = useHistory()
    const handlegotologin = () => history.push('/login')

    const [input, setInput] = React.useState({ title: "", description: "", image: "", author: "", price: "" });
    const createFood = async () => {
        const data = await API.graphql(graphqlOperation(createJPFood, {input: input}))
        console.log("success: ", data)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createFood()
    }

    return (
        <div>
            home
            <button onClick={getfoods}>get food</button>
            <button onClick={getorders}>get orders</button>
            <button onClick={handlegotologin}>go to login</button>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-fields">
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
