import { useState } from 'react';
import './App.css';

//사용자 정의태그=컴퍼넌트=함수형 컴퍼넌트
function Header(props){
  
  //react 로그 찍는방법
  //console.log('props',props,props.title);

  return <header>

        <h1><a href="/" >WEB(refresh 실행)</a></h1>

        <h1><a href="/" onClick={function(event){
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
  </header>
}

function App() {

  const[mode,setMode] = useState('WELCOME');
  const[id,setId] = useState(null);

  const [topics,setTopics] = useState([
    {id:1, title:'html',body:'html is ...'},
    {id:2, title:'css',body:'CSS is ...'},
    {id:3, title:'javascript',body:'javascript is ...'}
  ]);

  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME' )
  {
    content = <Article title = "WELCOME" body = "Hello ,Web"></Article>
  }
  else if(mode ==='READ')
  {
   
    let title,body = null;
    for(let i=0;i<topics.length; i++)
    {
      if(topics[i].id === id)
      {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title = {title} body = {body}></Article>
    contextControl = <>
    <li><a href = {'/update/'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>

    <li><input type = "button" value = "Delete" onClick={event=>{
      const newTopics = [];
      for(let i=0;i<topics.length;i++)
      {
        if(topics[i].id !== id)
        {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}/>
    </li>  
  </>
  }
  else if(mode ==='CREATE')
  {
    content = <Create onCreate={(_title,_body)=>{
    
    //신규 토픽 생성 
    const newTopic = {id:topics.length+1,title : _title, body:_body};    
    //기존 토픽배열 복제
    const newTopics = [...topics];
    //복제한 토픽배열 푸쉬
    newTopics.push(newTopic);
    //setTopics세팅(리렌더링 유도=기존 call by ref말고 value사용)
    setTopics(newTopics);
    
    //새로만든 토픽으로 이동
    setMode('READ');    
    setId(newTopic.id);
    
    }}></Create>
  }
  else if(mode ==='UPDATE')
  {
    
    let title,body = null;
    for(let i=0;i<topics.length; i++)
    {
      if(topics[i].id === id)
      {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title,body)=>{
    
    console.log("test",title,body);
    
    const updatedTopic = {id: id, title:title, body:body};
    const newTopics = [...topics];
    
    for(let i=0;i<newTopics.length; i++)
    {
      if(newTopics[i].id === id)
      {
        newTopics[i] = updatedTopic;
        break;
      }
    }
    setTopics(newTopics);

    }}></Update>
  }



  return (
    <div>
    <Header title = "WEB" onChangeMode={function(){
    //alert('Header');
    setMode('WELCOME');
    }}></Header>
    
    <Article title="Welcome"></Article>
    <Nav topics={topics} onChangeMode={(_id)=>{
      //alert(id);
      setMode('READ');
      setId(_id);
    }}></Nav>
    {content}
    <br></br>
    <li><a href='/create' onClick={event=>{
          event.preventDefault();
          setMode('CREATE');

      }}>Create</a></li>

      {/*Update,Delete 컴포넌트*/}
      {contextControl};

    </div>
    
  );
}

export default App;



function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Nav(props){

  const lis = []

  for(let i=0;i<props.topics.length; i++)
  {
    let t = props.topics[i];
    lis.push(
    <li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));

      }}>
      {t.title}</a>
      </li>
      )
  }
  return( 
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
    );
}

function Create(props)
{
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      props.onCreate(title,body);
    }}>
      <p><input type = "text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"/></p>
      <p><input type = "submit" value ="Create"/></p>
    </form>
  </article>
}

function Update(props)
{
  const [title2, setTitle] = useState(props.title);
  const [body2, setBody] = useState(props.body);
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title=event.target.title.value;
      const body=event.target.body.value;
      props.onUpdate(title,body);
    }}>
      <p><input type = "text" name="title" placeholder="title" value={title2} onChange={event=>{
        console.log(event.target.value);
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body2} onChange={event=>{
        console.log(event.target.value);
        setBody(event.target.value);
      }}/></p>
      <p><input type = "submit" value ="Update"/></p>
    </form>
  </article>
}