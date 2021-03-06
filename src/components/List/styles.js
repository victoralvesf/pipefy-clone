import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1}

  header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 42px;
      
      h2 {
        font-weight: 500;
        font-size: 16px;
        padding: 0 10px;
      }

      button {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: none;
        background: #3b5bfd;
        cursor: pointer;
      }

      button:hover {
        background: #011b9e;
      }
  }

  ul {
      margin-top: 30px;
  }
`;
