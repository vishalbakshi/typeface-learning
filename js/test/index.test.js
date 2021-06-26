import { fireEvent, getByText, getByRole, getByLabelText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './../index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
    beforeEach(() => {
      // Constructing a new JSDOM with this option is the key
      // to getting the code in the script tag to execute.
      // This is indeed dangerous and should only be done with trusted content.
      // https://github.com/jsdom/jsdom#executing-scripts
      dom = new JSDOM(html, { runScripts: 'dangerously' })
      container = dom.window.document.body
    })
  
    it('renders an h1 element with expected text', () => {
      expect(container.querySelector('h1')).not.toBeNull()
      expect(container.querySelector('h1').textContent).toBe('Typeface Image Generator')
    })
  
    it('renders typeface class checkboxes', () =>{
        expect(getByLabelText(container, 'Humanist Serif', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Transitional Serif', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Rational Serif', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Contemporary Serif', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Inscribed/Engraved', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Neo-Grotesque Sans', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Gothic Sans', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Geometric Sans', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Humanist Sans', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Neo-Humanist Sans', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Grotesque Slab', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Geometric Slab', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Humanist Slab', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Script', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Display', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Humanist Serif', () =>{
        fireEvent.click(getByLabelText(container, 'Humanist Serif', {selector: 'input'}))
        expect(getByLabelText(container, 'Adobe Jenson', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'FF Scala', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Minion', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'Garamond Premier', {selector: 'input'})).not.toBeNull()
        expect(getByLabelText(container, 'MVB Verdigris', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Transitional Serif', () =>{
      fireEvent.click(getByLabelText(container, 'Transitional Serif', {selector: 'input'}))
      expect(getByLabelText(container, 'Adobe Caslon', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Mrs Eaves', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Plantin', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Times New Roman', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Le Monde Journal', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Rational Serif', () =>{
      fireEvent.click(getByLabelText(container, 'Rational Serif', {selector: 'input'}))
      expect(getByLabelText(container, 'Filosofia', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'LTC Bodoni 175', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Contemporary Serif', () =>{
      fireEvent.click(getByLabelText(container, 'Contemporary Serif', {selector: 'input'}))
      expect(getByLabelText(container, 'Skolar', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'FF Meta Serif', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Inscribed/Engraved', () =>{
      fireEvent.click(getByLabelText(container, 'Inscribed/Engraved', {selector: 'input'}))
      expect(getByLabelText(container, 'Modesto', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Trajan', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Neo-Grotesque Sans', () =>{
      fireEvent.click(getByLabelText(container, 'Neo-Grotesque Sans', {selector: 'input'}))
      expect(getByLabelText(container, 'Antique Olive', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Gothic Sans', () =>{
      fireEvent.click(getByLabelText(container, 'Gothic Sans', {selector: 'input'}))
      expect(getByLabelText(container, 'Bell Centennial', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'News Gothic', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Geometric Sans', () =>{
      fireEvent.click(getByLabelText(container, 'Geometric Sans', {selector: 'input'}))
      expect(getByLabelText(container, 'ITC Avant Garde Gothic', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Din 2014', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Interstate', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'MVB Solano Gothic', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Humanist Sans', () =>{
      fireEvent.click(getByLabelText(container, 'Humanist Sans', {selector: 'input'}))
      expect(getByLabelText(container, 'Gill Sans Nova', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Myriad', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Cronos', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Auto', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Neo-Humanist Sans', () =>{
      fireEvent.click(getByLabelText(container, 'Neo-Humanist Sans', {selector: 'input'}))
      expect(getByLabelText(container, 'FF Meta', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'FF Dax', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Grotesque Slab', () =>{
      fireEvent.click(getByLabelText(container, 'Grotesque Slab', {selector: 'input'}))
      expect(getByLabelText(container, 'Clarendon Text', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Geometric Slab', () =>{
      fireEvent.click(getByLabelText(container, 'Geometric Slab', {selector: 'input'}))
      expect(getByLabelText(container, 'Rockwell', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Humanist Slab', () =>{
      fireEvent.click(getByLabelText(container, 'Humanist Slab', {selector: 'input'}))
      expect(getByLabelText(container, 'PMN Caecilia', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'FF Unit Slab', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Adelle', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Script', () =>{
      fireEvent.click(getByLabelText(container, 'Script', {selector: 'input'}))
      expect(getByLabelText(container, 'Kinescope', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Bickham Script', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Tangier', {selector: 'input'})).not.toBeNull()
    })

    it('renders font checkboxes corresponding to Display', () =>{
      fireEvent.click(getByLabelText(container, 'Display', {selector: 'input'}))
      expect(getByLabelText(container, 'Bree', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Rumba', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Trade Gothic Next', {selector: 'input'})).not.toBeNull()
      expect(getByLabelText(container, 'Cabazon', {selector: 'input'})).not.toBeNull()
    })
    // it('renders a button element', () => {
    //   expect(container.querySelector('button')).not.toBeNull()
    //   expect(getByText(container, 'Click me for a terrible pun')).toBeInTheDocument()
    // })
  
    // it('renders a new paragraph via JavaScript when the button is clicked', async () => {
    //   const button = getByText(container, 'Click me for a terrible pun')
      
    //   fireEvent.click(button)
    //   let generatedParagraphs = container.querySelectorAll('#pun-container p')
    //   expect(generatedParagraphs.length).toBe(1)
  
    //   fireEvent.click(button)
    //   generatedParagraphs = container.querySelectorAll('#pun-container p')
    //   expect(generatedParagraphs.length).toBe(2)
  
    //   fireEvent.click(button)
    //   generatedParagraphs = container.querySelectorAll('#pun-container p')
    //   expect(generatedParagraphs.length).toBe(3)
    // })
  })