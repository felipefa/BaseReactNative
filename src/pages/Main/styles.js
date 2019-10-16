import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  align-items: center;
  background-color: #333;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.Text`
  color: #ddd;
  font-size: 18px;
  font-weight: 400;
  margin-top: 8px;
`;
