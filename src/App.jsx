import { useState } from 'react'

export default function App() {



  return (
    <>
      <header>
        <div className='container'>
          <h1 className='text-center py-2'>React Post Form</h1>
        </div>
      </header>

      <main>
        <form className="container">
          <div className="col-12 pt-3">
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="Autore del post" />
          </div>

          <div className="col-12 my-3">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Titolo del post" />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              id="body"
              rows="3"
              placeholder="Testo del post">
            </textarea>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="public" />
            <label
              className="form-check-label"
              htmlFor="public"> Public
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Invia</button>

        </form>
      </main>
    </>
  )
}


