import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom"
// 封装一个高阶组件
function withRouter(WrapperComponent) {
  return function (props) {
    const navigate = useNavigate() // 1.导航
    const params = useParams() // 2.动态路由参数
    const location = useLocation() // 3.查询字符串的参数：/user?name=test&age=18
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)
    const router = { navigate, params, location, query }
    return <WrapperComponent {...props} router={router} />
  }
}

export default withRouter
