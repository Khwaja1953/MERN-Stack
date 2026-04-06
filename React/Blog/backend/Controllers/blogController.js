const Blog = require('../Models/Blog');

const handleAddBlog = async (req, res) => {
    try {
        const { title, body } = req.body;
        if (!req.user) {
            return res.status(401).json({error: "Unauthorized"});
        }
        if (!title || !body) {
            return res.status(400).json({error: "Title and body are required"});
        }
        if (!req.file) {
            return res.status(400).json({error: "Image is required"});
        }
        const image = `/uploads/blog/${req.file.filename}`;
        const blog = await Blog.create({
            title,
            image,
            body,
            createdBy: req.user._id
        })
        return res.status(201).json({message:"blog added successfully", blog})
        // return res.redirect('/')

    }
    catch (error) {
        // return res.render('/blog/addBlog', { error })
        return res.status(500).json({error})
    }
}

module.exports = { handleAddBlog }
