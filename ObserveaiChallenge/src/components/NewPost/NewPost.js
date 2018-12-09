import React from "react";
import classes from './NewPost.module.css';
import Button from '../UI/Button/Button';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import {withRouter} from 'react-router-dom';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "https://cdn0.iconfinder.com/data/icons/basic-outline/64/icon-basic-set_12-camera-512.png"
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    this.props.uploadPost(this.state.imagePreviewUrl);
    this.props.history.push('/');
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  onClose = ()=>{
    this.props.history.push('/');
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img className={classes.ImagePost} src={imagePreviewUrl} />;
    }

    return (
      <div className={classes.NewPost}>
      <i className={"fa fa-times "+classes.Close} onClick={this.onClose}></i>
      <i className={"fa fa-arrow-left "+classes.CloseMini} onClick={this.onClose}></i>
      <div className={classes.NewPostMain}>
      <div className={classes.ImagePreviewBox}>
        {$imagePreview}
      </div>
        <form onSubmit={this._handleSubmit} className={classes.ImageUploadBox}>
          <input type="file" onChange={this._handleImageChange} className={classes.Browse}/>
          <Button type="submit" onClick={this._handleSubmit}>
            Upload Image
          </Button>
        </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch=>{
  return {
    uploadPost: (image)=>dispatch(actions.addPost(image))
  }
}

export default withRouter(connect(null,mapDispatchToProps)(NewPost));
