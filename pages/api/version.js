export default function handler(_, res) {
  const version = process.env.VERSION;

  if (version !== undefined) {
    res.status(200).json({ version });
  } else {
    res.status(500).json({
      error:
        "Version was not provided during the build. This error is normal during development.",
    });
  }
}
