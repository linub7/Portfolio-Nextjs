import PortfolioApi from '@/lib/api/portfolios';
import auth0 from '@/utils/auth0';

export default async function handlePortfolio(req, res) {
  const {
    query: { id },
    body,
  } = req;
  const { accessToken } = await auth0.getSession(req);
  if (req.method === 'GET') {
    const json = await new PortfolioApi().getById(id);
    const { portfolio } = json.data;
    return res.json(portfolio);
  }

  if (req.method === 'PATCH') {
    try {
      const json = await new PortfolioApi(accessToken).updatePortfolio(
        id,
        body
      );
      const updatedPortfolio = json.data;
      res.json(updatedPortfolio);
    } catch (err) {
      console.log(err);
      res.status(err.status || 422).json(err.response.data);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const json = await new PortfolioApi(accessToken).deletePortfolio(id);
      const deletedPortfolio = json.data;
      res.json(deletedPortfolio);
    } catch (err) {
      console.log(err);
      res.status(err.status || 422).json(err.response.data);
    }
  }
}
