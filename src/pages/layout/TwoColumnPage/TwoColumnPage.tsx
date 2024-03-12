import { Box, Breadcrumbs, Button, Container, Grid, Stack } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"

export const TwoColumnPage: FC = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Top</Link>
      </Breadcrumbs>

      <Container maxWidth="md">
        <Grid
          container
          alignItems="flex-start"
          spacing={4}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          {/* header */}
          <Grid item xs={12}>
            <Box
              width="100%"
              height="100px"
              sx={{ backgroundColor: "darkblue", fontSize: "2.5rem" }}
            >
              header
            </Box>
          </Grid>

          {/* main content */}
          <Grid item xs={12} md={8}>
            <Box
              width="100%"
              height="800px"
              sx={{ backgroundColor: "darkblue" }}
            >
              <Box sx={{ fontSize: "2.5rem" }}>main content</Box>
              <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <Button variant="contained">Button{i}</Button>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* side bar */}
          <Grid item xs={12} md={4}>
            <Box
              width="100%"
              height="200px"
              sx={{ backgroundColor: "darkblue", fontSize: "2.5rem" }}
            >
              {"side bar(upper)"}
            </Box>
            <Box
              sx={{
                position: "sticky",
                top: 40,
                mt: 4,
                backgroundColor: "darkblue",
                fontSize: "2.5rem",
              }}
            >
              {"side bar(bottom)"}
            </Box>
          </Grid>

          {/* footer */}
          <Grid item xs={12}>
            <Box
              width="100%"
              height="100px"
              sx={{ backgroundColor: "darkblue", fontSize: "2.5rem" }}
            >
              footer
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
