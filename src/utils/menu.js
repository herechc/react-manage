export const menus = [
  {
    path: '/signin', title: '登录', icon: 'link',hidden: true
  },
  {
    path: '/signup', title: '注册', icon: 'link',hidden:true
  },
  {
    path: '/manage', title: '数据管理', icon: 'link',hidden:false,
    children: [
      {path: '/manage/userList', title: '用户列表', icon: 'link',hidden:false},
      {path: '/manage/adminList', title: '管理员列表', icon: 'link',hidden:false},
      {path: '/manage/goods', title: '商品', icon: 'link',hidden:false},
      {path: '/manage/banner', title: '焦点图', icon: 'link',hidden:false},
      {path: '/manage/category', title: '分类', icon: 'link',hidden:false}
    ]
  },
  {
    path: '/charts', title: '图表',icon: 'link',hidden:false
  },
  {
    path: '/markdown', title: '文本编辑', icon: 'link',hidden:false
  },
  {
    path: '/explain', title: '说明', icon: 'link',hidden:false
  }
]