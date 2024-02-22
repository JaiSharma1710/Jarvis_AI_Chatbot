export async function POST(req, res) {
  const uploadFile = await req.json();
  uploadFile.mv(
    `${__dirname}/public/files/test.png`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }
      res.json({
        file: `public/test.png`,
      })
    },
  )
//   return Response.json({ status: "success", message: "done" });
}
