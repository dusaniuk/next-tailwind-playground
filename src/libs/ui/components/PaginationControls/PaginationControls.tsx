import { PaginationButton } from "./PaginationButton";

export type PaginationControlsProps = {
  nextPagePath: string | null;
  previousPagePath: string | null;
};

export function PaginationControls(props: PaginationControlsProps) {
  const { nextPagePath, previousPagePath } = props;

  return (
    <section className="flex justify-between w-full">
      {previousPagePath ? (
        <PaginationButton direction="left" href={previousPagePath}>
          Previous
        </PaginationButton>
      ) : (
        <div></div>
      )}
      {nextPagePath && (
        <PaginationButton direction="right" href={nextPagePath}>
          Next
        </PaginationButton>
      )}
    </section>
  );
}
