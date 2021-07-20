import './App.css'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const App = () => {
  const printDocument = () => {
    const input = document.getElementById('divToPrint')
    html2canvas(input, { windowWidth: '8.5in', windowHeight: '5in' }).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'JPEG', 0, 0)
      // pdf.output('dataurlnewwindow');
      pdf.save('download.pdf')
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={printDocument}>Print</button>

        <div
          id="divToPrint"
          className="mt4"
          style={{
            backgroundColor: 'blue',
            width: '8.5in',
            minHeight: '5in',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
