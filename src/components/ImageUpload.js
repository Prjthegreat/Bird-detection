import React,{Component} from "react";
import "./ImageUpload.css"
class ImageUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      //this.props.setimgurl(this.state.imagePreviewUrl)
      this.props.sendRequest()
      console.log('handle uploading-', this.state.file,this.state.imagePreviewUrl);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
      this.props.setimgdata(file)
  
      reader.onloadend = () => {
        let thumb = document.querySelector('.js--image-preview')
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
        thumb.className += ' js--no-default';
        this.props.setimgurl(reader.result)
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} height="300px" width="441px"  />);
      } 
      // else {
      //   $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      // }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit"
              
              onClick={(e)=>this._handleSubmit(e)} disabled={this.props.loading || this.props.imgdata===null} >Predict</button>
          </form>
          {/* <div className="imgPreview">
            {$imagePreview}
          </div> */}
          <div class="box">
            <div class="js--image-preview"> {$imagePreview}</div>

          </div>
        </div>
      )
    }
  }
    
export default ImageUpload