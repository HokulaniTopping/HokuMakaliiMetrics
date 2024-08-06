// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Valleys" titleTo="valleys" buttonLabel="New Valley" buttonTo="newValley">
        <Route path="/valleys/new" page={ValleyNewValleyPage} name="newValley" />
        <Route path="/valleys/{unique_sample_number:Int}/edit" page={ValleyEditValleyPage} name="editValley" />
        <Route path="/valleys/{unique_sample_number:Int}" page={ValleyValleyPage} name="valley" />
        <Route path="/valleys" page={ValleyValleysPage} name="valleys" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
