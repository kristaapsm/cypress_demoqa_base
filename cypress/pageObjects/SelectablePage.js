import BasePage from "./BasePage";


class SelectablePage extends BasePage {
    static get url() {
      return "/selectable";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
      }

      static get chooseLine() {
        return cy.get("#verticalListContainer>li");
      }

      static get gridButton(){
          return cy.get("#demo-tab-grid");
      }
      
    static get row1(){
        return cy.get("#row1");
    }
    static get row2(){
        return cy.get("#row2");
    }

    static get row3(){
        return cy.get("#row3");
    }
}

export default SelectablePage;