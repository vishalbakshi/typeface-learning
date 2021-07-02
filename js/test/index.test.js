import { fireEvent, getAllByRole, getByLabelText, getByText } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { toBeVisible } from '@testing-library/jest-dom'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
const html = fs.readFileSync(path.resolve(__dirname, './../index.html'), 'utf8');
const words = fs.readFileSync(path.resolve(__dirname, './words.txt'), 'utf-8')
let dom
let container
let typeface_classes
let fonts
let font_list

describe('index.html', () => {
    beforeEach(() => {
      // Constructing a new JSDOM with this option is the key
      // to getting the code in the script tag to execute.
      // This is indeed dangerous and should only be done with trusted content.
      // https://github.com/jsdom/jsdom#executing-scripts
      dom = new JSDOM(html, { runScripts: 'dangerously' })
      container = dom.window.document.body
      typeface_classes = [
        "Humanist Serif",
        "Transitional Serif",
        "Rational Serif",
        "Contemporary Serif",
        "Inscribed/Engraved",
        "Neo-Grotesque Sans",
        "Gothic Sans",
        "Geometric Sans",
        "Humanist Sans",
        "Neo-Humanist Sans",
        "Grotesque Slab",
        "Geometric Slab",
        "Humanist Slab",
        "Script",
        "Display"]
      fonts = {
          "Humanist Serif": [
            "Adobe Jenson",
            "FF Scala",
            "Minion",
            "Garamond Premier",
            "MVB Verdigris"
            ], 
          "Transitional Serif": [
            "Adobe Caslon",
            "Mrs Eaves",
            "Plantin",
            "Times New Roman",
            "Le Monde Journal"
          ],
          "Rational Serif": [
            "Filosofia",
            "LTC Bodoni 175"
          ],
          "Contemporary Serif": [
            "Skolar",
            "FF Meta Serif"
          ],
          "Inscribed/Engraved": [
            "Modesto",
            "Trajan"
          ],
          "Neo-Grotesque Sans": [
            "Antique Olive"
          ],
          "Gothic Sans": [
            "Bell Centennial",
            "News Gothic"
          ],
          "Geometric Sans": [
            "ITC Avant Garde Gothic",
            "Din 2014",
            "Interstate",
            "MVB Solano Gothic"
          ],
          "Humanist Sans": [
            "Gill Sans Nova",
            "Myriad",
            "Cronos",
            "Auto"
          ],
          "Neo-Humanist Sans": [
            "FF Meta",
            "FF Dax"
          ],
          "Grotesque Slab": [
            "Clarendon Text"
          ],
          "Geometric Slab": [
            "Rockwell"
          ],
          "Humanist Slab": [
            "PMN Caecilia",
            "FF Unit Slab",
            "Adelle"
          ],
          "Script": [
            "Kinescope",
            "Bickham Script",
            "Tangier"
          ],
          "Display": [
            "Bree",
            "Rumba",
            "Trade Gothic Next",
            "Cabazon"
          ]
        }
        font_list = [
          "Adobe Jenson",
          "FF Scala",
          "Minion",
          "Garamond Premier",
          "MVB Verdigris",
          "Adobe Caslon",
          "Mrs Eaves",
          "Plantin",
          "Times New Roman",
          "Le Monde Journal",
          "Filosofia",
          "LTC Bodoni 175",
          "Skolar",
          "FF Meta Serif",
          "Modesto",
          "Trajan",
          "Antique Olive",
          "Bell Centennial",
          "News Gothic",
          "ITC Avant Garde Gothic",
          "Din 2014",
          "Interstate",
          "MVB Solano Gothic",
          "Gill Sans Nova",
          "Myriad",
          "Cronos",
          "Auto",
          "FF Meta",
          "FF Dax",
          "Clarendon Text",
          "Rockwell",
          "PMN Caecilia",
          "FF Unit Slab",
          "Adelle",
          "Kinescope",
          "Bickham Script",
          "Tangier",
          "Bree",
          "Rumba",
          "Trade Gothic Next",
          "Cabazon"]
    })
  
    it('renders an h1 element with expected text', () => {
      expect(container.querySelector('h1')).not.toBeNull()
      expect(container.querySelector('h1').textContent).toBe('Typeface Image Generator')
    })

    it('renders typeface class checkboxes', () => {
      for (let typeface of typeface_classes) {
        expect(getByLabelText(container, typeface, {selector: 'input'})).not.toBeNull();
      }
    })

    it('renders font checkboxes upon typeface class checkbox click', () => {
      for (let typeface in fonts) {
        userEvent.click(getByLabelText(container, typeface, {selector: 'input'}))
        for (let font of fonts[typeface]) {
          expect(getByLabelText(container, font, {selector: 'input'})).not.toBeNull()
        }
      }
    })

    it('sets image settings element hidden attribute to false if single font checkbox is checked and true if unchecked', () => {
      for (let font of font_list) {
        // click a font checkbox -> image setting elements should not be hidden
        userEvent.click(getByLabelText(container, font, {selector: 'input'}))
        expect(getByLabelText(container, 'Number of Images per Class', {selector: 'input'})).toBeVisible()
        expect(getByLabelText(container, 'Image Height (px)', {selector: 'input'})).toBeVisible()
        expect(getByLabelText(container, 'Image Width (px)', {selector: 'input'})).toBeVisible()

        // click the font checkbox again -> image setting elements should be hidden
        userEvent.click(getByLabelText(container, font, {selector: 'input'}))
        expect(getByLabelText(container, 'Number of Images per Class', {selector: 'input'})).not.toBeVisible()
        expect(getByLabelText(container, 'Image Height (px)', {selector: 'input'})).not.toBeVisible()
        expect(getByLabelText(container, 'Image Width (px)', {selector: 'input'})).not.toBeVisible()
      }
    })

    it('sets image settings hidden attribute to false if all font checkboxes are checked and true if they are unchecked', () => {
      // click all font checkboxes
      for (let font of font_list) {
        userEvent.click(getByLabelText(container, font, {selector: 'input'}))
      }
      expect(getByLabelText(container, 'Number of Images per Class', {selector: 'input'})).toBeVisible()
      expect(getByLabelText(container, 'Image Height (px)', {selector: 'input'})).toBeVisible()
      expect(getByLabelText(container, 'Image Width (px)', {selector: 'input'})).toBeVisible()

      // un-click all font checkboxes
      for (let font of font_list) {
        userEvent.click(getByLabelText(container, font, {selector: 'input'}))
      }
      expect(getByLabelText(container, 'Number of Images per Class', {selector: 'input'})).not.toBeVisible()
      expect(getByLabelText(container, 'Image Height (px)', {selector: 'input'})).not.toBeVisible()
      expect(getByLabelText(container, 'Image Width (px)', {selector: 'input'})).not.toBeVisible()
    })

    it('makes visible the word list input elements once all three image settings elements are populated ', () => {
      userEvent.type(getByLabelText(container, 'Number of Images per Class', {selector: 'input'}), '20')
      userEvent.type(getByLabelText(container, 'Image Height (px)', {selector: 'input'}),'224')
      userEvent.type(getByLabelText(container, 'Image Width (px)', {selector: 'input'}), '224')
      expect(getByLabelText(container, 'Number of Images per Class', {selector: 'input'})).toHaveValue(20)
      expect(getByLabelText(container, 'Image Height (px)', {selector: 'input'})).toHaveValue(224)
      expect(getByLabelText(container, 'Image Width (px)', {selector: 'input'})).toHaveValue(224)
      expect(getByLabelText(container, 'Word List File Upload', {selector: 'input'})).toBeVisible()
      expect(getByLabelText(container, 'Word List Textbox', {selector: 'textarea'})).toBeVisible()
    })
   
    it('receives expected word list via textbox', () => {
      let expected_value = 'word\nlist\ntextbox'
      userEvent.type(getByLabelText(container, 'Word List Textbox', {selector: 'textarea'}), expected_value)
      expect(getByLabelText(container, 'Word List Textbox', {selector: 'textarea'}).value).toEqual(expected_value)
    })

    it('receives expected word list via file upload', () => {
      let input = getByLabelText(container, 'Word List File Upload', {selector: 'input'})
      userEvent.upload(input, words)
      expect(input.files[0]).toStrictEqual(words)
    })
  })