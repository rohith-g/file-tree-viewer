import React, { useState } from 'react';

function App() {
  return <div>
    <Folder name='Desktop'>
      <File name='picture.png'></File>
      <File name='song.mp3'></File>
    </Folder>

    <Folder name='Applications'>
      <Folder name='Visual Studio'>
        <File name='assets.txt'></File>
      </Folder>
    </Folder>
  </div>
}

const Folder = (props) => {
  const { name, children } = props;
  const [ input, setInput ] = useState(name)
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const direction = isOpen ? 'down' : 'right';
  const folder = isOpen ? 'open' : null;

  return <div>
    <span onClick={handleClick}>
      <i className={`blue folder ${folder} icon`} />
      <i className={`caret ${direction} icon`} />
    </span>
    <input style={{ border: 'none' }} value={input} onChange={(e) => setInput(e.target.value)} />
    <div style={{ marginLeft: '21px' }}>
      {isOpen ? children : null}
    </div>
  </div>
}

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3: 'music',
    png: 'file image',
    txt: 'file',
  }

  const [ input, setInput ] = useState(name)
  const [ ext, setExt ] = useState(fileExtension)

  const handleChange = (value) => {
    setInput(value);
    setExt(value.split('.')[1]);
  }

  return <div>
    <i className={`${fileIcons[ext]} icon`} />
    <input style={{ border: 'none' }} value={input} onChange={(e) => handleChange(e.target.value)} />
  </div>
}

export default App;