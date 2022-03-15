import React from 'react';
import styled from 'styled-components';

const Main = (props) => {
  return(

    <Container>
      <WritePost>
          <ProfilePicture>

          </ProfilePicture>
          <InputField>
            <div>
              <img src="/images/user.svg"></img>
            </div>
            <div>
              <input placeholder='Start a Post'></input>
            </div>
          </InputField>
      </WritePost>
      <Icons>
        <PhotoSection>
          <div>
              <img></img>
              <h5>Photo</h5>
          </div>
        </PhotoSection>
        <VideoSection>
        <div>
              <img></img>
              <h5>Video</h5>
          </div>
        </VideoSection>
        <EventSection>
        <div>
              <img></img>
              <h5>Event</h5>
          </div>
        </EventSection>
        <ArticleSection>
        <div>
              <img></img>
              <h5>Article</h5>
          </div>
        </ArticleSection>
      </Icons>
    </Container>
  );
  
};

const Container=styled.div`
grid-area:main;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
height:20%;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
padding: 12px;
`
const WritePost= styled.div`


`
const ProfilePicture = styled.div`

`

const InputField = styled.div`
display:flex;
align-items:center;
flex:1;
div{
  img{
    height:auto;
    width:50px;
    border-radius:90%;
    overflow:hidden;
  }
}
input{
  
  border-radius:30px;
  height:50px;
  padding:10px 10px;
  width:auto !important;
}

`
const Icons = styled.div`
  display:grid;
  gird-template-column:repeat(4 , 1fr);

`
const PhotoSection = styled.div``

const VideoSection = styled.div``

const EventSection = styled.div``

const ArticleSection = styled.div``
export default Main