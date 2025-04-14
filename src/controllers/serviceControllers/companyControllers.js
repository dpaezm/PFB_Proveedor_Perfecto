import createCompany from '../../models/serviceModels/company.js';
import generateError from '../../utils/helpers.js';

export default async function newCompanyController(req, res, next) {
  console.log('creando compañia');
  try {
    const { owner_id, companyname, email, password, description, city, phone } =
      req.body;

    // Esto debería ser sustituido por joi
    if (!email || !password) {
      throw generateError('Debes enviar un email y una password', 400);
    }

    const id = await createCompany(
      owner_id,
      companyname,
      email,
      password,
      description,
      city,
      phone,
    );

    res.send({
      status: 'ok',
      message: `company created with id: ${id}`,
    });
  } catch (error) {
    next(error);
  }
}
