import React, { Component } from 'react';

class Blog extends Component {

    render() {
        return (
            <div className="jumbotron">
            <h1 className="display-3">Mit To Mao</h1>
            <p className="lead">Blog Chia Se Kien Thuc</p>
            <hr className="my-2" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, iste beatae, laborum minus quo corporis omnis animi eum consequuntur tempore quibusdam nihil fuga sequi maxime tempora neque eveniet suscipit modi!</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Learn More</a>
            </p>
          </div>
        );
    }
}

export default Blog;