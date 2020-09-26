import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    label {
        display: block;
        margin-bottom: 1rem;
        width: 100%;
        text-align: center;
    }
    input,
    textarea,
    select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
`;

export default Form;