import styled from "@emotion/styled";

export const MainStyle = styled.div`
  * {
    font-size: 100%;
    font-family: "Lucida Console", "Courier New", monospace;
  }

  h2 {
    font-size: 25px;
    text-align: center;
  }

  .todoApp {
    background: #4270A4;
    height: 100vh;
    padding: 30px;
  }

  .todo-list {
    background: #e8e8e8;
    border-radius: 4px;
    max-width: 500px;
    padding: 15px;
    margin-top: 10em;
    margin-right: auto;
    margin-left: auto;
  }

  .separate{
    width: 60%;
  }

  .todo {
    align-items: center;
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    margin-bottom: 6px;
    padding: 15px 10px;
  }

  .addForm {
    display: flex;
    margin: 20px 0;
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.2);
  }

  .addForm > * {
    border: 0;
    padding: 0 0 0 10px;
    background: #fff;
    line-height: 50px;
    font-size: 16px;
    border-radius: 0;
    outline: 0;
    -webkit-appearance: none;
  }

  .addButton {
    background: #ef3f5a;
    border: 1px solid #ef3f5a;
    color: #fff;
    padding: 0 30px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
  }

  .addButton:hover {
    background: #d73851;
    border: 1px solid #d73851;
  }

  input[type="text"] {
    flex-basis: 400px;
  }

  .option {
    background: rgb(12, 124, 251);
    border-radius: 5px;
    margin: 0px 2px;
    padding: 3px 5px;
    border: none;
    cursor: pointer;
    color: white;
  }

  .option:hover {
    background: #2b76cc;
    border: 0.5px solid #2b76cc;
  }

  .check{
      display: flex;
      align-items: center;
  }

.checkbox > input {
    height: 26px;
    width: 27px;
}

  @media screen and (max-width: 500px) {
      
  h2 {
    font-size: 20px;
  }

  .todo {
    font-size: 10px;
  }

  .separate{
    width: 50%;
  }

  .addForm {
    margin: 20px 0;
  }

  .addForm > * {
    border: 0;
    padding: 0 0 0 10px;
    background: #fff;
    line-height: 30px;
    font-size: 10px;
    border-radius: 0;
    outline: 0;
    -webkit-appearance: none;
  }

  .addButton {
    background: #ef3f5a;
    border: 1px solid #ef3f5a;
    color: #fff;
    padding: 0 10px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
  }

  .option {
    font-size: 7px;
  }

  .option:hover {
    background: #2b76cc;
    border: 0.5px solid #2b76cc;
  }

  .checkbox > input {
    height: 20px;
    width: 24px;
}

  }
`;


