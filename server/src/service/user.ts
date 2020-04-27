import User from '../db/models/user'

export default class UserService {
  public async addUser(usr: string, psd: string) {
    try {
      const user = new User({
        usr,
        psd
      })
      let res = await User.findOne({
        usr
      })
      if (res) {
        throw new Error('用户名已存在 (￣o￣).zZ')
      }
      // 如果user重复，mongodb抛出duplicate key异常
      return await user.save()
    } catch (error) {
      throw new Error('用户名已存在 (￣o￣).zZ')
    }
  }
  public async validUser(usr: string, psd: string) {
    try {
      const user = await User.findOne({
        usr
      })
      // 查询用户
      if (!user) {
        throw new Error('用户不存在 (￣o￣).zZ')
      }
      // 校验密码
      if (psd === user.psd) {
        return user
      }
      throw new Error('密码错误 (￣o￣).zZ')
    } catch (error) {
      throw new Error(error.message)
    }
  }
}