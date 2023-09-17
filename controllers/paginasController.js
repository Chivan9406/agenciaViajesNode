import {Viaje} from "../models/Viaje.js";
import {Testimonial} from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    try {
        const [viajes, testimoniales] = await Promise.all([
            Viaje.findAll({
                limit: 3
            }),
            Testimonial.findAll({
                limit: 3
            })
        ])

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        })

    } catch (error) {
        console.error(error)
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll()

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })

    } catch (error) {
        console.error(error)
    }
}

const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params

    try {
        const resultado = await Viaje.findOne({
            where: {
                slug
            }
        })

        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })

    } catch (error) {
        console.error(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}