import { useRef, useState } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

const AdminBlogs = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [body, setbody] = useState("");
  const [category, setcategory] = useState("");
  const [file, setfile] = useState(null);
  const [fileselected, setfileselected] = useState(null);

  const [image, setimage] = useState(null);
  const [imageselected, setimageselected] = useState(null);

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [url, seturl] = useState(null);

  const fileChange = (e) => {
    setfile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setfileselected(reader.result);
      console.log(reader.result);
    };
  };

  const imageChange = (e) => {
    setimage(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setimageselected(reader.result);
      console.log(reader.result);
    };
  };

  const imageupload = async () => {
    const { data: image } = await axios.post(`${process.env.REACT_APP_BACKEND}/image`, {
      file: imageselected,
    });
    console.log(image.message);
    seturl(image.message.url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.set("file", file);

    // console.log(formData)

    // const config = { headers: { "Content-Type": "multipart/form-data" } };

    // try {

    const { data: image } = await axios.post(`${process.env.REACT_APP_BACKEND}/image`, {
      file: fileselected,
    });
    console.log(image.message);

    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND}/api/b/create`, {
      title: title,
      body: content,
      description: desc,
      category: category,
      topImage: {
        public_id: image.message.public_id,
        url: image.message.url,
      },
    });

    console.log(data);

    // } catch (error) {
    //   console.log("Error", error)
    // }
  };

  return (
    <div className="overflow-y-auto h-full">
      {image && (
        <img className="h-[50px] w-[50px]" src={imageselected} alt="" />
      )}
      <input type="file" accept="image/png" onChange={imageChange} required />
      <button onClick={imageupload}>Upload</button>
      {url && (
        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
        >
          Copy
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <JoditEditor
          ref={editor}
          value={content}
          // config={config}
          onChange={(newContent) => setContent(newContent)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        {file && (
          <img className="h-[50px] w-[50px]" src={fileselected} alt="" />
        )}

        <input type="file" accept="image/png" onChange={fileChange} required />

        <button type="submit"> Submit </button>
      </form>
      {content}
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AdminBlogs;
