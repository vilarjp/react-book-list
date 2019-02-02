import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component {

    displayBookDetais() {
        const { book } = this.props.data
        if(book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>Genre: {book.genre}</p>
                    <p>Book Author: {book.author.name}</p>
                    <p>Author age: {book.author.age}</p>
                    <p>All books by this Author:</p>
                    <ul className="book-list">
                        {book.author.books.map(book => {
                            return <li key={book.id}><h3>{book.name} - {book.genre}</h3></li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>No book selected</h2>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="book-details">
                {this.displayBookDetais()}
            </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)