import { useEffect, useState } from 'react'
import MacTemplete from './MacTemplete'
import Markdown from 'react-markdown'
import Pdfs from './Pdfs';

const NoteBook = () => {
    const [content, setContent] = useState(null);

    useEffect(()=>{
        fetch("/Intro.md")
            .then((res) => {
              return res.text();
            })
            .then(data => setContent(data))
    } , []);

  return (
    <MacTemplete>
        {/* {content!=null ? <Markdown>{content}</Markdown> : 'loading...'} */}
        <Markdown>{content}</Markdown>
        
    </MacTemplete>
  )
}

export default NoteBook
