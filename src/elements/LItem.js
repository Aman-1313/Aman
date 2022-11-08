import '/Users/amanpreetsingh/beat_empire_studios/src/App.css';
function LItem({name, imageUrl, para, link}){
	return (
    	<div className="author">
          <img style={{ width: "90%", height: "86%" }} src={imageUrl} alt={name}/>
          <p>{name}</p>
          <p className='SubjIntro'> {para}<a href={link}>read more! </a> </p>
        </div>
    )
}
export default  LItem;