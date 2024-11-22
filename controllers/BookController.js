const {Book, Genre,GenreBook} = require("../models/index")

const BookController ={
    async create(req,res){
        try {
            const book = await Book.create(req.body)//para crear el libro
            book.addGenre(req.body.GenreId) //inserto en la tabla intermedia genreBooks
            res.status(201).send({message:"Book successfully created", book})
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error });
        }
    },
    async getAll(req,res){
        try {
            const books = await Book.findAll({
                attributes:["title","price"],
                include:{
                    model:Genre,//modelo que esta relacionado
                    attributes: ["name"],//atributos del modelo que quiero mostrar
                    through: { attributes: [] }//para que no se muestren los atributos de la tabla intermedia
                }
            }) 
            res.send({message:"Here are all the books",books})
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error });
        }
        
    },
    async delete(req, res) {
        try {
            await Book.destroy({
                where: {
                    id: req.params.id
                }
            })
            await GenreBook.destroy({
                where: {
                    BookId: req.params.id
                }
            })
            res.send({ message: 'The book has been removed'})
        }
         catch (error) {
            console.log(error)
        }
    },
    async update(req, res) {
        try {
          await Book.update(req.body,
            {
              where: {
                id: req.params.id,
              },
            }
          ); //actualizo el libro
          const book = await Book.findByPk(req.params.id)
          book.setGenres(req.body.GenreId);//actualizo tabla intermedia
          res.send("Libro actualizado con éxito");
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "no ha sido posible actualizado el  libro" });
        }
      },
  


}

module.exports = BookController