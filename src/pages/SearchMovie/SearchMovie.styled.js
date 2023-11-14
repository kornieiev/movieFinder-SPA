import { Form } from 'formik';
import styled from 'styled-components';

export const MoviesWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const MoviesForm = styled(Form)`
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 20px;
  border: 1px solid red;
  padding: 5px;
`;
