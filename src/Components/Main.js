import React from 'react';
import styled from 'styled-components';
import {BsCardImage} from 'react-icons/bs';
import {MdOutlineVideoLibrary} from 'react-icons/md';
import {MdOutlineEventAvailable} from 'react-icons/md';
import {RiArticleLine} from 'react-icons/ri';
import {BsThreeDots} from 'react-icons/bs';
import '../Css/Main.css'

const Main = (props) => {
  return(

    <Container>
      <ShareBox>Share
      <div>
        <img src="/images/user.svg" alt=""></img>
        <button>Start a post</button>
      </div>
      <div>
        <button>
          
             <BsCardImage className="image__icon"/>
        
          <span >Photo</span>
        </button>
        <button>
          <MdOutlineVideoLibrary className="video__icon"/>
          <span>Video</span>
        </button>
        <button>
          <MdOutlineEventAvailable className="event__icon" />
          <span>Event</span>
        </button>
        <button>
          <RiArticleLine className="article__icon"/>
          <span>Write Article</span>
        </button>
      </div>
      </ShareBox>
      <Article>
        <SharedActor>
            <a>
                <img src="/images/user.svg" alt=""></img>
                <div>
                  <span>Title</span>
                  <span>Info</span>
                  <span>Date</span>
                </div>
            </a>
            <button>
                <BsThreeDots/>
            </button>
         
        </SharedActor>
        <Description>Description</Description>
        <SharedImg>
          <a>
            <img src="/images/shared-image.jpg"></img>
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <button>
               <img src="/images/like.png" alt=""></img>
               <img src='/images/clap.png' alt=""></img>
                <span>75</span>
            </button>
          </li>
          <li>
            <a>2 comments</a>
          </li>
        </SocialCounts>
      </Article>
    </Container>
  );
  
};

const Container=styled.div`
grid-area:main;

`;

const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 / 15%) , 0 0 0 rgb( 0 0 0 / 20%);
`;

const ShareBox=styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
background:white;
div{
  button{
    outline:none;
    color:rgba(0,0 ,0,0.6)
    font-size:14px;
    line-height:1.5;
    min-height:48px;
    background:transparent;
    border:none;
    display:flex;
    align-items:center;
    font-weight:600;
  }
  &:first-child{
    display:flex;
    align-items:center;
    padding:8px 16px 0px 16px;
    img{
      width:48px;
      border-radius:50%;
      margin-right:8px;
    }
    button{
      margin:4px 0;
      flex-grow:1;
      border-radius:35px;
      padding-left:16px;
      border:1px solid rgba(0 , 0 , 0, 0.15);
      border-radius:35px;
      background-color:white;
      text-align:left;
    }
  }
  &:nth-child(2){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding-bottom:4px;
    button{
     span{
       color:#70b5f9;
     }
    }
  }
}
`;

const Article = styled(CommonCard)`
padding:0;
margin:0 0 8px;
overflow:visible;
`;
const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom: 8px;
align-items:center;
display:flex;
a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display:flex;
  text-decoration:none;
  img{
  width:48px;
  height: 48px;
}
  & > div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:8px;
    overflow:hidden;
    span{
      text-align:left;
      &:first-child{
        font-size:14px;
        font-weight:700;
        color:black;
        color:rgba(0,0,0,1);
      }
      &:nth-child(n+1){
        font-size:12px;
        color:rgba( 0,0,0,.6);

      }
    }
  }
}

button{
  position:absolute;
  border:none;
  background:transparent;
  right:12px;
  top:0;
  outline:none;
 

}
`

const Description = styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,.9);
font-size:14px;
text-align:left;
`;

const SharedImg = styled.div`
margin-top:8px;

display: block;
position:relative;
background-color:#f9fafb;
img{
  width:100%;
}
`;

const SocialCounts = styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin: 0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style-type: style none;
li{
  margin-right:5px;
  font-size:12px;
    button{
      display:flex;
      img:first-child{
        height:20px;
      }
      img:nth-child(2){
        height:32px;;
      }
    }
}
`
export default Main;