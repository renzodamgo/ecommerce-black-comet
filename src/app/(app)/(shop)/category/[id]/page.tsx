type Props = {
  params: {
    id: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  return (
    <div>
      <h1>Hello Page</h1>
      <p>{id}</p>
    </div>
  );
}
