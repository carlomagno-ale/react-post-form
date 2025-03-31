import { useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: ''
  })


  function handleFormData(e) {
    const type = e.target.type;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    const key = e.target.id;


    console.log(type, key, value)
    console.dir(e.target);

    setFormData({ ...formData, [key]: value })
  }

  function handleFormSubmit(e) {

    e.preventDefault()
    console.log(formData)

  }

  return (
    <>
      <header>
        <div className='container'>
          <h1 className='text-center py-2'>React Post Form</h1>
        </div>
      </header>

      <main>
        <div className='container'>
          <form method='POST' onSubmit={handleFormSubmit}>
            <div className="col-12 pt-3">
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Autore del post"
                value={formData.author}
                onChange={handleFormData}
                required />
            </div>

            <div className="col-12 my-3">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Titolo del post"
                value={formData.title}
                onChange={handleFormData}
                required />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                id="body"
                rows="3"
                placeholder="Testo del post"
                value={formData.body}
                onChange={handleFormData}
                required >
              </textarea>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="public"
                value={formData.public}
                onChange={handleFormData} />
              <label
                className="form-check-label"
                htmlFor="public"> Public
              </label>
            </div>

            <button type="submit" className="btn btn-primary">Invia</button>

          </form>
        </div>
      </main>
    </>
  )
}


