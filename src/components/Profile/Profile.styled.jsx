import styled from '@emotion/styled';

export const Card = styled.div`
  margin: auto;
  margin-top: 64px;
  margin-bottom: 64px;
  max-width: 380px;
  height: 460px;
  border-radius: 20px;
  position: relative;
  background: ${props => props.theme.colors.backgroundColor};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  background: ${props => props.theme.colors.rectangleBackgroundColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin-top: 214px;
  margin-bottom: auto;
`;

export const Avatar = styled.img`
  display: block;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-color: #5736a3;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-top: -44px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Tweets = styled.div`
  position: absolute;
  margin-top: 284px;
  margin-left: auto;
  margin-right: auto;
  width: 132px;
  height: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.div`
  position: absolute;
  margin-top: 324px;
  margin-left: auto;
  margin-right: auto;
  width: 132px;
  height: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Location = styled.p`
  text-align: center;
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.colors.profileBkgColor};
  padding: 16px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const Quantity = styled.span`
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;

export const Value = styled.span`
  text-align: center;
  line-height: 1.5;
  font-size: 16px;
`;
