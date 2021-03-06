const axios = require('axios')

const sendRequest = async (url) => {
  return await axios.get(url)
}

const getGitHubData = async (user) => {
  const userUrl = `https://api.github.com/users/${user}`

  const { data: userFullData } = await sendRequest(userUrl)

  /* eslint-disable camelcase */
  const userInfo = (({
    login,
    name,
    avatar_url,
    company,
    blog,
    followers,
    following,
    location,
    public_repos,
  }) => ({
    login,
    name,
    avatar_url,
    company,
    blog,
    followers,
    following,
    location,
    public_repos,
  }))(userFullData)
  /* eslint-enable */

  if (userFullData.public_repos > 0) {
    const nPages = Math.ceil(userFullData.public_repos / 30)
    const pageArr = Array.from({ length: nPages }, (_, i) => i + 1)
    const repoData = await Promise.all(
      pageArr.map(async (val) => {
        const { data } = await sendRequest(
          `${userFullData.repos_url}?page=${val}`
        )
        return data
      })
    )

    return {
      user: userInfo,
      repos: repoData,
    }
  }

  return {
    user: userInfo,
  }
}

export default getGitHubData
