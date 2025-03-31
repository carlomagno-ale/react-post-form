import { useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    body: '',
    public: ''
  })


  function handleFormData(e) {
    const type = e.target.type;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    const key = e.target.name;


    console.log(type, key, value)
    console.dir(e.target);

    setFormData({ ...formData, [key]: value })
  }

  function handleFormSubmit(e) {

    e.preventDefault()
    console.log(formData)

    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

      .catch(error => {
        console.error('Error:', error);
      });

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
                name="title"
                id="title"
                placeholder="Titolo del post"
                value={formData.title}
                onChange={handleFormData}
                required />
            </div>

            <div className="col-12 my-3">
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                placeholder="Autore del post"
                value={formData.author}
                onChange={handleFormData}
                required />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                name="body"
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
                name="public"
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


