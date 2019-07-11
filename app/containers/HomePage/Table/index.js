import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { Link, RouterLink } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';
// import ProfilePage from 'containers/ProfilePage';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }

  // eslint-disable-next-line camelcase
  to_slug = str => {
    // Chuyển hết sang chữ thường
    // eslint-disable-next-line no-param-reassign
    str = str.toLowerCase();

    // xóa dấu
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/-+$/g, '');

    // return
    return str;
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      this.setState({ arr: res.data });
    });
  }

  render() {
    const { arr } = this.state;
    console.log(arr);
    return (
      <div>
        <h1 style={{ margin: '100px 0 50px', textAlign: 'center' }}>
          List Data Table
        </h1>
        <MaterialTable
          style={{
            width: '70%',
            margin: 'auto',
          }}
          columns={[
            {
              title: 'ACTION',
              field: 'action',
              // eslint-disable-next-line react/jsx-no-undef
              render: rowData => (
                <div>
                  <ul>
                    <li>
                      <Link
                        component={RouterLink}
                        // eslint-disable-next-line react/prop-types
                        to={`/user/+{this.props.id}`}
                      >
                        <Button>Profile</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              ),
            },
            { title: 'ID', field: 'id' },
            { title: 'NAME', field: 'name' },
            {
              title: 'USERNAME',
              field: 'username',
              render: rowData => {
                if (rowData.username.length > 8) {
                  return (
                    <span style={{ fontWeight: 'bold' }}>
                      {rowData.username}
                    </span>
                  );
                }
                return rowData.username;
              },
            },
            { title: 'PHONE', field: 'phone' },
            { title: 'EMAIL', field: 'email', type: 'numeric' },
          ]}
          data={arr.map(value => value)}
        />
      </div>
    );
  }
}

export default Listing;
